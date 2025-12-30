import Image from "next/image";
import TopicCards from "@/components/topic-cards";

export default function Home() {
  return (
    <main className="min-h-svh flex flex-col gap-10 p-10 pt-30">
      {/* Introduction Section */}
      <section className="flex justify-center" aria-label="المقدمة">
        <div className="max-w-xl flex flex-col items-center gap-8">
          <Image
            src="/images/logo.webp"
            alt="شعار فريق السلامة والصحة المنهية"
            height={150}
            width={150}
            priority
          />
          <div className="text-center space-y-3.5">
            <h1 className="font-semibold text-4xl">السلامة أولاً</h1>
            <p className="font-mono text-muted-foreground text-md">
              يرجي اتباع التعليمات بدقة للحفاظ على سلامتكم!
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="flex justify-center" aria-label="المواضيع">
        <TopicCards className="w-full max-w-5xl" role="list" />
      </section>

      {/* Copyright footer */}
      <footer className="sticky top-full" dir="ltr" aria-label="حقوق النشر">
        <p className="font-mono text-center text-muted-foreground text-sm">
          <span>© 2026</span>{" "}
          <a
            href="https://github.com/moehabsas"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mohamed El-Gedawy
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
