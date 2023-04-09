import { getNowPlaying } from '@lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { APIResponse } from '@lib/types/helper';
import type { NowPlaying } from '@lib/types/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<NowPlaying>>
): Promise<void> {
  if (req.method === 'GET')
    try {
      const track = await getNowPlaying();

      if (!track) return res.status(200).json({ isPlaying: false });

      const {
        item: {
          name: trackName,
          album: {
            name: albumName,
            images: [{ url: albumImageUrl }]
          },
          artists,
          external_urls: { spotify: trackUrl }
        },
        is_playing: isPlaying
      } = track;

      const artistName = artists.map(({ name }) => name).join(', ');

      const nowPlaying: NowPlaying = {
        trackUrl,
        isPlaying,
        trackName,
        albumName,
        artistName,
        albumImageUrl
      };

      return res.status(200).json(nowPlaying);
    } catch (err) {
      if (err instanceof Error)
        return res.status(500).json({ message: err.message });

      return res.status(500).json({ message: 'Internal server error' });
    }

  return res.status(405).json({ message: 'Method not allowed' });
}