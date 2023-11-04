export interface Props {
  liveID: string;
}

function LiveCommerce({ liveID }: Props) {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${liveID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>

      <iframe
        src={`https://www.youtube.com/live_chat?v=${liveID}&embed_domain=localhost`}
        width="560"
        height="315"
        frameBorder="0"
      >
      </iframe>
    </>
  );
}

export default LiveCommerce;
