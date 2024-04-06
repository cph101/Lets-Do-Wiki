export default function ImageSpecial({ modId, imageId, align }) {
  return (
    <div>
      <img src={`/Lets-Do-Wiki/img/textures/${modId}/image/${imageId}`} alt="silo" align="right" width="325" height="150" style="margin-right:20px;" />
    </div>
  );
}