import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideoList() {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);


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
            console.log(snapshot);
            setLoading(false);
            if (snapshot.exists()) {
                setVideos((prevVideos) => {
                    return [...prevVideos, Object.values(snapshot.val())]
                })
            } else {

            }
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
        }
    }
  }, []);
}
