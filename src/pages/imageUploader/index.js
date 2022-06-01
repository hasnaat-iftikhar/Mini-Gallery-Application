import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import { AppButton, AppList } from "../../components";

// Layout
import MainLayout from "../../layouts/main";

// Styles
import styles from "./imageUploader.module.scss";

const ImageUploader = () => {
  toast.configure();
  const fileTypeError = () => toast.error("Please select PNG images!");

  const [loading, setLoading] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const types = ["image/png"];

  const handleImage = (e) => {};

  const handleUpload = () => {
    setLoading(true);
  };

  return (
    <MainLayout>
      <section className={styles.ImageUploader}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.pageTitle}>Upload Your Photos</h1>

            <div className={styles.bulletPoints}>
              <ul className={styles.bulletsWrapper}>
                <AppList className={styles.bullets}>
                  Your uploads will display on our home page.
                </AppList>
                <AppList className={styles.bullets}>
                  Try to upload square shaped images with high resolution. We
                  support only PNG format.
                </AppList>
                <AppList className={styles.bullets}>
                  We'll review your submission. If it gets selected, you will
                  receive an congrats email notification.
                </AppList>
              </ul>
            </div>

            <div className={styles.imageUploader}>
              <input
                type="file"
                className={styles.imageInput}
                onChange={handleImage}
              />
              <button className={styles.imageUploaderBtn}>
                Select your image
              </button>
            </div>
            {loading === true ? (
              <span className={styles.selectedImgTxt}>Loading ...</span>
            ) : (
              selectedImage && (
                <span className={styles.selectedImgTxt}>
                  You selected {selectedImage.name}
                </span>
              )
            )}
          </div>
          <div className={styles.publishImgBox}>
            {selectedImage ? (
              <AppButton onClick={handleUpload} title="Publish" color="green" />
            ) : (
              <small className={styles.selectedImgTxt}>Choose an image</small>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ImageUploader;
