import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleCard from "../Components/Cards/ArticleCard";
import Header from "../Components/Headers/Header";
import { INIT_ARTICLES } from "../Constants/ActionTypes";
import { BASE_URL_API } from "../Constants/URLs";
import { fetchApi } from "../Helper/callApiHelper";

const Home = ({...props}) => {
  const {articles} = props as {articles: any[]};

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([
    {
      name: "Xspander 2022",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Volvo 404",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
    },
    {
      name: "Xspander 2022",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Volvo 404",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
    },
    {
      name: "Car1",
      price: 200,
      unit: "",
      location: "",
      image:
        "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
    },
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetchApi(`${BASE_URL_API}/article`, 'GET')
      if (response.status === 200) {
        dispatch({
          type: INIT_ARTICLES,
          payload: {
            articles: response.data
          }
        })
      }
    }
    fetchArticles();
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // check scroll to at bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10
    ) {
        if (loading === false) setLoading(true);
      }
    });

    return () => {};
  }, [loading, setLoading]);

  useEffect(() => {
    const fetchMoreData = async () => {
      const data = [
        {
          name: "Car1",
          price: 200,
          unit: "",
          location: "",
          image:
            "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
        },
        {
          name: "Car1",
          price: 200,
          unit: "",
          location: "",
          image:
            "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
        },
        {
          name: "Car1",
          price: 200,
          unit: "",
          location: "",
          image:
            "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
        },
        {
          name: "Car1",
          price: 200,
          unit: "",
          location: "",
          image:
            "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
        },
        {
          name: "Car1",
          price: 200,
          unit: "",
          location: "",
          image:
            "https://a0.muscache.com/im/pictures/97f9d0cd-6218-4c2b-82cc-eb2e3f8810bc.jpg?im_w=720",
        },
        {
          name: "Car1",
          price: 200,
          unit: "",
          location: "",
          image:
            "https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg",
        },
      ];

      return await data;
    };

    if (loading && items.length < 100) {
      const loadData = async () => {
        const result = (await fetchMoreData()) as [any];

        if (result) {
          setItems([...items, ...result]);
        }
        setLoading(false);
      };
      loadData();
    }
  }, [setLoading, items, loading, setItems]);

  return (
    <div className="relative max-w-xl mx-auto">
      <Header />
      <div className={`grid grid-cols-1`}>
        {articles.map((v: any, i: number) => (
          <div key={i}>
            <ArticleCard item={v} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center">
        {loading && items.length < 100 ? <span>Loading more...</span> : ""}
      </div>
    </div>
  );
};

export default Home;
