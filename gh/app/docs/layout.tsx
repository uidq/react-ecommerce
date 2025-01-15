export default function Documentation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="items-center justify-center bg-[#0a0a0a]">
      <div className="justify-center">
        {children}
      </div>
    </section>
  );
}
