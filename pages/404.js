import Link from "next/link";
import Image from "next/image";
import Button from "../components/UI/Button";

import styles from "../styles/404.module.css";
import Spacer from "../components/UI/Spacer";

const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
      <div className={`row ${styles["not-found-row"]}`}>
        <div className="col-sm-6">
          <h1>Ooops...</h1>
          <h2>Page not found</h2>
          <p>
            The page you are looking for does not exist or an error occurred, go
            back to the home page.
            <Spacer height="60px" />
            <Link href="/">
              <Button>Go Back</Button>
            </Link>
          </p>
        </div>
        <div className="col-sm-6">
          <div className="image-container c-header">
            <Image
              alt="error illustration"
              src="/Error.png"
              layout="fill"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
