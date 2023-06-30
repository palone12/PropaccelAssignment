import React from "react";

interface FeatureData {
  title: string;
  featureContent: string;
}

const featureData: FeatureData[] = [{
  title: "Interactive features",
  featureContent:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
},
{
  title: "Interactive features",
  featureContent:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
}
];

const FeatureCard: React.FC<FeatureData> = ({ title, featureContent }) => {
  return (
    <div className="inline-flex h-auto w-auto p-[30px] flex-col items-start rounded-md border border-purple-700 gap-[15px]">
      <h2 className="text-base font-poppins font-bold">
        {title}
      </h2>
      <p className="text-xs font-poppins font-normal">
        {featureContent}
      </p>
    </div>
  )
}



const About: React.FC = () => {
  return (
    <div className="flex px-[175px]">
      <div className="flex w-[1439px] h-[525px] gap-6 mt-10">
        <div className="flex flex-col pt-[49px] gap-5 pb-[127px]">
          {
            featureData.map((item) => {
              return (
                <FeatureCard title={item.title} featureContent={item.featureContent} />
              )
            })
          }

        </div>
        <div className="flex flex-col pt-[72px] gap-5 pb-[79px]">
          {
            featureData.map((item) => {
              return (
                <FeatureCard title={item.title} featureContent={item.featureContent} />
              )
            })
          }
        </div>
      </div>
      <div className="w-auto h-auto inline-flex flex-col items-start gap-[48px] mt-[125px] ml-[120px]">
        <h1 className="text-black text-4xl font-inter font-bold">
          About the Course
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="px-[56px] py-[15px] justify-center items-center rounded-lg bg-gradient-to-r text-white text-lg font-bold from-blue-500 to-purple-600">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default About;
