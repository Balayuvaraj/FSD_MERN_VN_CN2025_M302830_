function downloadFile(filename, callback) {
    console.log(`Downloading ${filename}...`);
    setTimeout(() => callback(), 2000);
}

downloadFile("movie.mp4", () => {
    console.log("Download complete!");
});
