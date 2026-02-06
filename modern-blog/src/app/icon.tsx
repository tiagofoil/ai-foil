import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 20,
                    background: '#09090b',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '20%',
                    border: '1px solid #333',
                }}
            >
                <div
                    style={{
                        background: 'linear-gradient(to bottom right, #22d3ee, #a78bfa)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        fontWeight: 800,
                        lineHeight: 1,
                        display: 'flex',
                        // 'marginBottom' fixes optical alignment for some fonts
                        marginBottom: 2,
                    }}
                >
                    AF
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
