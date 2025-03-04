import VideoThumbnail from "@/components/VideoThumbnail";

const Tutorials: React.FC = () => {
 const videos = [
  {id: "hw2Jd8WrwJI", title: "Video 1"},
  {id: "SOSCgGePxG0", title: "Video 2"},
  {id: "g2UecC_KCJI", title: "Video 3"},
 ];

 return (
  <div className="flex flex-col gap-5 h-auto w-full p-5 bg-[#f4f4f]">
   <h1 className="lg:text-2xl 2xl:text-3xl font-bold text-primary">
    Tutorials
   </h1>
   <div className="grid grid-cols-3 gap-2">
    {videos.map((video) => (
     <VideoThumbnail
      key={video.id}
      videoId={video.id}
      title={video.title}
     />
    ))}
   </div>
  </div>
 );
};

export default Tutorials;
