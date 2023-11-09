import React, { useState, useEffect,useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface SlideData {
  id: number;
  title: string;
  label: string;
}

const Sliders: React.FC = () => {
  const [nav1, setNav1] = useState<Slider>();
  const [nav2, setNav2] = useState<Slider>();
  const [slider1, setSlider1] = useState<Slider>();
  const [slider2, setSlider2] = useState<Slider>();

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,

  };

  const settingsThumbs: Settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
  };


  const slidesData: SlideData[] = [
    {
      id: 1,
      title: 'repellendus id ullam',
      label: 'Dolorem officiis temporibus.',
    },
    {
      id: 2,
      title: 'excepturi consequatur est',
      label: 'Officia non provident dolor esse et neque.',
    },
    {
      id: 3,
      title: 'eius doloribus blanditiis',
      label: 'Ut recusandae vel vitae molestiae id soluta.',
    },
    {
      id: 4,
      title: 'nihil voluptates delectus',
      label: 'Qui vel consequatur recusandae illo repellendus.',
    },
    {
      id: 5,
      title: 'nemo dolorem necessitatibus',
      label: 'Placeat odit velit itaque voluptatem.',
    },
    {
      id: 6,
      title: 'dolorem quibusdam quasi',
      label: 'Adipisci officiis repudiandae.',
    },
  ];

  const slider1Ref = useRef<Slider | null>(null);
  const slider2Ref = useRef<Slider | null>(null);

  return (
   
    <div

        className="h-full  min-w-[320px] min-h-[320px] xs:h-[400px] ">
      <Slider

        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => {
          setSlider1(slider || undefined);
          slider1Ref.current = slider;
        }}
      >
        {slidesData.map((slide) => (
          <div  className="2xl:h-[544px] xl:h-[564px] lg:h-[564px] md:h-[564px] xs:h-[340px] 2xs:h-[300px] h-[340px] flex justify-center items-center "
              key={slide.id}>
            <img
              className="rounded-2xl object-cover"
              style={{
                maxWidth: 564,
                minWidth: 320,
                height: '100%',
              }}
              src={`https://picsum.photos/800/400?img=${slide.id}`}
            />
          </div>
        ))}
      </Slider>
      <div style={{
        maxWidth: 564,
        minWidth: 320,
        height: '100%',
      }} className="">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => {
            setSlider2(slider || undefined);
            slider2Ref.current = slider;
          }}
        >
          {slidesData.map((slide) => (
            <div className="2xl:h-[120px] xs:h-[80px] sm:h-[90px] md:h-[90px] lg:h-[100px] xl:h-[110px]">
            <img
                style={{
                  height: '100%',
                }}
              className="object-cover xs:h-24 rounded-xl p-1 max-w-[128px]"
              src={`https://picsum.photos/800/400?img=${slide.id}`}
            />
           </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;