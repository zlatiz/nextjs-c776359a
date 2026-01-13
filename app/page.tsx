import Image from 'next/image';

const IMAGES: string[] = [
  'https://johnkeanestudios.com/Images/StudioBanner.png',
  'https://johnkeanestudios.com/Images/j.keane2.jpg',
  'https://johnkeanestudios.com/Images/console.JPG',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-SjPFnSKh6v3kFvULpwVgmEAY.png?st=2026-01-13T12%3A20%3A23Z&se=2026-01-13T14%3A20%3A23Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=0ec745ad-3d9b-4d43-86db-87a2c9b420f1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T12%3A02%3A20Z&ske=2026-01-14T12%3A02%3A20Z&sks=b&skv=2024-08-04&sig=MBEYe/6uGBcteVRfJGVbWUUdz4Yxqu1J%2BqbSE1PWEh0%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-Go13dwIz8d5QsTS6ntHv3IJ0.png?st=2026-01-13T12%3A20%3A49Z&se=2026-01-13T14%3A20%3A49Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=c4071b20-fbe5-4cbe-8e48-4476b70c6a90&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T13%3A08%3A44Z&ske=2026-01-14T13%3A08%3A44Z&sks=b&skv=2024-08-04&sig=fc9I2LpVp9eJJFCHRo46TZmUvn4c%2BcNqBvmlFpG%2Bw5o%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-55Ebh0dMsuLVp1QucPtfgGwn.png?st=2026-01-13T12%3A21%3A13Z&se=2026-01-13T14%3A21%3A13Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=1726b4ce-fee1-450b-8b92-1731ad8745f6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T13%3A21%3A13Z&ske=2026-01-14T13%3A21%3A13Z&sks=b&skv=2024-08-04&sig=AgspPwY0DAMm22%2BeInDoiDpBggV2E/J%2BvroxZTtKfJo%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-9kzHPg0eLXIx3F4BUKPEW5dF.png?st=2026-01-13T12%3A21%3A34Z&se=2026-01-13T14%3A21%3A34Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=c4071b20-fbe5-4cbe-8e48-4476b70c6a90&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T13%3A21%3A34Z&ske=2026-01-14T13%3A21%3A34Z&sks=b&skv=2024-08-04&sig=C9hKr2KXeW7Cvv/NXujkFnlS1TxcOljvsIwG4zjO2hE%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-tOhFMERmyTPNwVFiZsOGeUhG.png?st=2026-01-13T12%3A22%3A00Z&se=2026-01-13T14%3A22%3A00Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=e12db1aa-1007-44fd-8388-3a70fd6a4956&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T11%3A17%3A40Z&ske=2026-01-14T11%3A17%3A40Z&sks=b&skv=2024-08-04&sig=ABtBbkh4DQSXeGXxucegrNssPRxgpY0peUp0e3PboxI%3D',
  'https://oaidalleapiprodscus.blob.core.windows.net/private/org-eBlfuLLrMXymhLttSOqR7OGL/user-H7BOcLApEmplFFFDusAib2uB/img-ks0CVLPYnENSwljIrZhyebxl.png?st=2026-01-13T12%3A22%3A19Z&se=2026-01-13T14%3A22%3A19Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=67205dde-9780-4119-bbff-6343b48e42b6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-13T12%3A45%3A01Z&ske=2026-01-14T12%3A45%3A01Z&sks=b&skv=2024-08-04&sig=8D/42kTP6lMbIVRvreGGD3ECa3y7OJOnur/uRGb0QPk%3D'
];

export default function Page() {
  return (
    <section>
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">John Keane Studios</h1>
        <p className="text-muted mt-2">Welcome to John Keane Studios</p>
      </header>

      <div className="w-full rounded-xl overflow-hidden mb-8 shadow-md">
        {(() => {
          const url = IMAGES[0];
          const safeSrc = encodeURI(url);
          return (
            <Image src={safeSrc} alt="Studio banner" width={1600} height={600} className="w-full h-auto object-cover" unoptimized />
          );
        })()}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(Array.isArray(IMAGES) ? IMAGES : []).map((raw, idx) => {
          const safeSrc = encodeURI(raw);
          const key = `img-${idx}`;
          return (
            <figure key={key} className="glass p-2">
              <Image src={safeSrc} alt={`studio-${idx}`} width={800} height={600} className="rounded-md object-cover w-full h-48 sm:h-56 lg:h-44" unoptimized />
            </figure>
          );
        })}
      </section>

    </section>
  );
}
