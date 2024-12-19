import content from "/src/assets/Content.svg";

function Paner() {
  return (
    <section className="w-full bg-[#1F1F1F] relative z-30 flex justify-center items-center h-[200px]">
      <img
        src={content}
        alt="Description of the content image"
        loading="lazy"
      />
    </section>
  );
}

export default Paner;
