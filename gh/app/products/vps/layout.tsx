export default function VPS({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center bg-[#0a0a0a]">
      <div className=" text-center justify-center">
        {children}
      </div>
    </section>
  );
}
