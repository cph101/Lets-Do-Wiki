export default function Image({ modId, imageId, align }) {
  return (
    <div align={align}>
      <img src={`/Lets-Do-Wiki/img/textures/${modId}/image/${imageId}`} alt="display" width="500"/>
    </div>
  );
}