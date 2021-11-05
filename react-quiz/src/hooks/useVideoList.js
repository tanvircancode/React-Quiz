import { getDatabase, query, ref, orderByKey ,get } from 'firebase/database';
import { useEffect } from 'react';

export default function useVideoList() {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      //   database works
      const db = getDatabase();
      const videosRef = ref(db, 'videos');
        const videoQuery = query(videosRef, orderByKey());

        try {
            setError(false);
            setLoading(true);
            // request firebase database
            const snapshot = await get(videoQuery);
            setLoading(false);
            if (snapshot.exists()) {

            } else {
                
            }
        } catch (err) {
            console.log(err);
        }
    }
  }, []);
}
