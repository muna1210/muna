import { useRef } from "react";

export default function Home() {
  const serviceRef = useRef(null);
  const tokiServiceRef = useRef(null);
  const tokiPayRef = useRef(null);
  const newsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-screen bg-slate-50">
      
      <div className="h-20 flex justify-between items-center px-20 fixed w-full bg-white z-50 shadow">
        <img
          src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
          className="w-32" onClick={() => router.back()}
        />
        <div className="flex gap-6 text-gray-800">
          <button onClick={() => scrollToSection(serviceRef)} className="hover:text-yellow-500">Үйлчилгээ</button>
          <button onClick={() => scrollToSection(tokiServiceRef)} className="hover:text-yellow-500">Давуу тал</button>
          <button onClick={() => scrollToSection(newsRef)} className="hover:text-yellow-500">Мэдээ</button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-yellow-500">Холбоо</button>
        </div>
      </div>

      <div ref={serviceRef} className="h-screen flex flex-col justify-center items-center pt-20 bg-orange-100">
        <p className="text-3xl font-bold mb-6 text-center">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</p>
        <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png" className="w-96" />
      </div>

      
      <div ref={tokiServiceRef} className="h-screen relative">
        <img
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/3 right-32 max-w-lg">
          <p className="text-yellow-400 text-4xl font-bold mb-4">Toki Service</p>
          <p className="text-black text-lg leading-relaxed">
            Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
          </p>
        </div>
      </div>

      
      <div ref={tokiPayRef} className="h-screen w-full relative bg-orange-100">
        <img
          src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/3 left-32 max-w-lg">
          <p className="text-yellow-400 text-4xl font-bold mb-4">Toki Pay</p>
          <p className="text-black text-lg leading-relaxed">
            Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.
          </p>
        </div>
      </div>

      
      <div ref={newsRef} className="h-screen relative">
        <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png" className="w-full h-full object-cover" />
        <div className="absolute top-1/3 right-32 max-w-lg">
          <p className="text-yellow-400 text-4xl font-bold mb-4">Toki Shop</p>
          <p className="text-black text-lg leading-relaxed">
            Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.
          </p>
        </div>
      </div>

      <div className="w-screen h-auto pt-32 pb-32 flex gap-16 justify-center items-center">
  <div className="text-center w-3/5 h-auto p-4">
    <p className="text-yellow-400 text-4xl font-bold p-4">
      Toki апп өдөр бүр танд тусална
    </p>
    <p className="text-center p-4">
      Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
    </p>
  </div>
</div>

<div className="bg-orange-100 p-16 flex justify-center text-white">
  <button className="px-16 py-4 bg-yellow-400 rounded-full">Давуу тал</button>
</div>

      <div ref={contactRef} className="bg-black text-white flex justify-between items-start p-10">
        <div>
          <img
            src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png"
            alt="Toki Logo"
            className="w-24 mb-4"
          />
          <p className="text-sm">Copyright © 2022 | Toki.mn</p>
        </div>
        <div className="text-sm space-y-2">
          <p>Түгээмэл асуулт</p>
          <p>Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
          <p>📞 77074477, 4477</p>
          <p>✉️ info@toki.mn</p>
        </div>
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
        </div>
      </div>
    </div>
  );
}
