import React, { useState, useEffect,useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from '../../assets/leftbuton.svg';
import right from '../../assets/rightbuton.svg';


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
    centerPadding: '10px',
    prevArrow: (
      <img src={left} alt="right" className="next-slick-arrow text-black" />
    ),
    nextArrow: (
      <img src={right} alt="left" className="prev-slick-arrow text-black" />
    ),
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
   
    <div className="h-full 2xl:w-[1248px] xl:w-[100px] lg:[700px]">
      <Slider
          className='2xl:w-[1248px] xl:w-[100px] lg:[700px]'
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => {
          setSlider1(slider || undefined);
          slider1Ref.current = slider;
        }}
      >
        {slidesData.map((slide) => (
          <div key={slide.id}>
            <img
              className="rounded-2xl"
              style={{
                width: 1248,
                height: 592,
              }}
              src={`https://picsum.photos/800/400?img=${slide.id}`}
            />
          </div>
        ))}
      </Slider>
      <div style={{ width: 564 }} className="">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => {
            setSlider2(slider || undefined);
            slider2Ref.current = slider;
          }}
        >
          {slidesData.map((slide) => (
            <img
              className="object-cover rounded-xl p-1 w-[128px] h-[128px]"
              src={`https://picsum.photos/800/400?img=${slide.id}`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;