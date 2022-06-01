import React, { useEffect, useState } from "react";

// Layouts
import MainLayout from "../../layouts/main";

// Mocks
import { Categories } from "../../mocks/categories";

// Styles
import styles from "./home.module.scss";

const HomePage = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {}, []);

  return (
    <MainLayout>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.mainHeading}>
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h1>
          <div className={styles.categoryBox}>
            <p className={styles.categoryTxt}>
              <span>Categories</span>
              <div className={styles.categoryWrapper}>
                {Categories.map((c) => (
                  <a href="#" className={styles.eachCategory}>
                    {c.name}
                  </a>
                ))}
              </div>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.galleryImages}>
            {loading === false ? (
              imageUrls.length > 0 ? (
                imageUrls.map((i) => (
                  <div className={styles.eachImage}>
                    <img className={styles.image} src={i.image.imageUrl} />
                  </div>
                ))
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginBottom: "70px",
                  }}
                >
                  No image is uploaded
                </p>
              )
            ) : (
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "70px",
                }}
              >
                Loading ...
              </p>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
