export default function CLOUD({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
      <div className=" text-center justify-center">
        {children}
      </div>
    </section>
  );
}
