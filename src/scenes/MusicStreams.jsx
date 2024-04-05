import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const MusicStreams = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Spotify API
        const response = await fetch(
          "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "8ad23b0eb0mshee694ccf7efa32fp1c017ejsn35b3dd5020fd",
              "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        // Extract albums from data
        const albumsData = data.albums.items;
        setAlbums(albumsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box m={4}>
      <Typography variant="h4" gutterBottom>
        Music Streams
      </Typography>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {albums.map((album, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={album.data.coverArt.sources[0].url}
                  alt={album.data.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {album.data.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Artist:{" "}
                    {album.data.artists.items
                      .map((artist) => artist.profile.name)
                      .join(", ")}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Year: {album.data.date.year}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MusicStreams;
