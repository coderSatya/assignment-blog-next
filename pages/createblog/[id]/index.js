import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Index = ({ blogdetail }) => {
  const [isBlogdetail, setIsBlogDetail] = useState([]);
  useEffect(() => {
    setIsBlogDetail([blogdetail]);
  }, []);

  const router = useRouter();
  const blogId = router.query;

  return (
    <div>
      {isBlogdetail?.map((item, index) => {
        return (
          <div
            className="flex justify-center items-center my-[150px]"
            key={index}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.summary}</p>
                <div className="flex justify-between">
                  <p className="text-black-700 text-base font-semibold my-2 ">
                    {item?.publicationDate}
                  </p>
                  <Link href={`/createblog/${item?.id}`}>
                    <button className="bg-red-500 py-2 px-3 text-white font-bold text-[13px] rounded">
                      More detail
                    </button>
                  </Link>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const response = await axios.get(`http://localhost:5000/posts/${id}`);

  return {
    props: {
      blogdetail: response.data,
    },
  };
};
