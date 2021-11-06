import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';

export default function Videos() {
  const [page, setPage] = useState(1);
  const { error, loading, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}>
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  id={video.youtubeID}
                  title={video.title}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  id={video.youtubeID}
                  title={video.title}
                  noq={video.noq}
                />
              </Link>
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error</div>}
      {loading && <div>Loading</div>}
    </div>
  );
}
