import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { text } = await request.json();

        if (!text || typeof text !== 'string') {
            return NextResponse.json({ error: 'Text is required' }, { status: 400 });
        }

        if (text.length > 1000) {
            return NextResponse.json({ error: 'Text too long (max 1000 characters)' }, { status: 400 });
        }

        if (!process.env.ELEVENLABS_TTS_KEY) {
            return NextResponse.json({ error: 'TTS service not configured' }, { status: 500 });
        }

        // Use Rachel voice (free tier voice)
        const voiceId = '21m00Tcm4TlvDq8ikWAM';

        const response = await fetch(
            `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'audio/mpeg',
                    'xi-api-key': process.env.ELEVENLABS_TTS_KEY,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text.trim(),
                    voice_settings: {
                        stability: 0.5,
                        similarity_boost: 0.5,
                        style: 0.0,
                        use_speaker_boost: true,
                    },
                    model_id: 'eleven_turbo_v2', // Faster, good for English
                }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('ElevenLabs API error:', response.status, errorText);

            if (response.status === 401) {
                return NextResponse.json({ error: 'Invalid API key' }, { status: 500 });
            }
            if (response.status === 429) {
                return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
            }

            return NextResponse.json({ error: 'TTS service unavailable' }, { status: 500 });
        }

        const audioBuffer = await response.arrayBuffer();

        return new NextResponse(audioBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        console.error('TTS API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}