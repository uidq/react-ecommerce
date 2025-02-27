export default function FAQ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-center bg-[#0a0a0a]">
      <div className="justify-center">
        {children}
      </div>
    </section>
  );
}
