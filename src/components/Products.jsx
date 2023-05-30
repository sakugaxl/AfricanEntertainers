import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { products } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProductCard = ({
  index,
  name,
  description,
  tags,
  image,
  price,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='product_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5 flex justify-between items-baseline'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-white font-semibold text-[18px]'>R{price}</p>
        </div>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
        <button
          className='mt-4 bg-tertiary text-white px-4 py-2 rounded'
          onClick={() => console.log("Bid on product")}
        >
          Contact for Details
        </button>
      </Tilt>
    </motion.div>
  );
};

const Products = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our products</p>
        <h2 className={`${styles.sectionHeadText}`}>Products.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Explore our unique and high-quality products. Each product is briefly described, and you can make an offer by clicking the "Make an Offer" button. Don't miss the chance to get your hands on these fantastic items!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {products.map((product, index) => (
          <ProductCard key={`product-${index}`} index={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Products, "products");
