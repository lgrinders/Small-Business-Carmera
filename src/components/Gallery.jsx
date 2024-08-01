import { GalleryImages } from "./GalleryImages.jsx";

export function Gallery() {
  const img1 = "portfolioImages/photo-1.jpg";
  const img2 = "portfolioImages/photo-2.jpg";
  const img3 = "portfolioImages/photo-3.jpg";
  const img4 = "portfolioImages/photo-4.jpg";
  const img5 = "portfolioImages/photo-5.jpg";
  const img6 = "portfolioImages/photo-6.jpg";
  const img7 = "portfolioImages/photo-7.jpg";
  const img8 = "portfolioImages/photo-8.jpg";
  const img9 = "portfolioImages/photo-9.jpg";
  const img10 = "portfolioImages/photo-10.jpg";
  const img11 = "portfolioImages/photo-11.jpg";
  const img12 = "portfolioImages/photo-12.jpg";
  const img13 = "portfolioImages/photo-13.jpg";
  const img14 = "portfolioImages/photo-14.jpg";
  const img15 = "portfolioImages/photo-15.jpg";

  const hash1 = "LMHUzlm+D%JDT}9FIBi_u6M}RPxt";
  const hash2 = "LQF$U[MdMxo}TeDhRjV@.TWXM{aJ";
  const hash3 = "LRHUtV#6WBIU.TRPM{VsGc57V@j?";
  const hash4 = "LPGbq]IUE1S5TzDOIUof_Nj[V?ad";
  const hash5 = "LMHUzlm+D%JDT}9FIBi_u6M}RPxt";
  const hash6 = "LqFr*IRjM{xu~qRjM|t7xuV@j[j[";
  const hash7 = "LdDcO0-;IURj~q-:IoWB-;%MWBRj";
  const hash8 = "L=IY2*RjWBj]~qR*WVofxuj[oeof";
  const hash9 = "L#HoLF-;ofxu~qxuRjt7ogR*Rjof";
  const hash10 = "LEDI:xV?oJWVyYRPWBV@_NjFadn$";
  const hash11 = "LKGuahRPWVjs.TM{aeay?^kDWBbH";
  const hash12 = "L9BfnXemrqazlAM_M{WB_NRPWBV@";
  const hash13 = "LEEfA*-:IpRl?wtR%LxZ.At8E2WE";
  const hash14 = "LkIE-89FIUt7~qD%RjofIoj[kDax";
  const hash15 = "LACiw200K59FIUs.ayIU~qIU%2Mx";

  return (
    <>
      <div className="pt-28">
        <div className="bg-white font-rubik">
          <div className="relative bg-white p-5 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
            <div className="columns-1 gap-5 space-y-5 sm:columns-2 xl:columns-3">
              <GalleryImages src={img1} hash={hash1} />
              <GalleryImages src={img2} hash={hash2} />
              <GalleryImages src={img3} hash={hash3} />
              <GalleryImages src={img4} hash={hash4} />
              <GalleryImages src={img5} hash={hash5} />
              <GalleryImages src={img6} hash={hash6} />
              <GalleryImages src={img7} hash={hash7} />
              <GalleryImages src={img8} hash={hash8} />
              <GalleryImages src={img9} hash={hash9} />
              <GalleryImages src={img10} hash={hash10} />
              <GalleryImages src={img11} hash={hash11} />
              <GalleryImages src={img12} hash={hash12} />
              <GalleryImages src={img13} hash={hash13} />
              <GalleryImages src={img14} hash={hash14} />
              <GalleryImages src={img15} hash={hash15} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
