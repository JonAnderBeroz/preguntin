"use client";

export default function Copy2Clipboard() {
  async function handleClick() {
    const image = await fetch(`${location.pathname}/opengraph-image`).then((res) => res.blob());
    await navigator.clipboard.write([new ClipboardItem({[image.type]: image})]);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-pink-700 px-2 w-60 text-white py-2 text-center rounded-lg hover:font-semibold text-lg"
    >
      Copiar al portapapeles
    </button>
  );
}
