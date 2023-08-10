import  { useContext } from "react";
import { socialMedia } from "../content/files/social-media";
import { AppContext } from "../contexts/AppContext";

export default function About() {
  const { ReactIcon } = useContext(AppContext);

  return (
    <div className="d-flex flex-column p-2 bgc3 gap-2">
      <div className="bg-light p-2 radius1">
        <h3 className="h3 bgc1 p-2 radius1 text-white">About</h3>
        <span className=" p-1 radius1 ls1 fs_12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero,
          voluptatem eaque distinctio quibusdam nesciunt quis in totam libero
          minus doloremque ea quae amet iste itaque dolores, at necessitatibus
          autem accusantium placeat veniam, quia sapiente eum dolore. Aliquam
          dolores repellat delectus vel, magni non assumenda quas, fuga
          excepturi aspernatur consequuntur!
        </span>
      </div>

      <div className="bg-light p-2 radius1">
        <h3 className="h3 bgc1 p-2 radius1 text-white">Social</h3>
        <div className="row text-center m-2 align-items-center justify-content-center gap-1">
          {socialMedia?.map((item, i) => {
            return (
              <a
                className={`${item.btnClass} dec-off p-1 w_25`}
                key={i}
                href={item?.link}
              >
                {" "}
                {item.name}
                {/* <ReactIcon name={item.icon} size={20} /> */}
                {/* {React.createElement(ReactIcon[item.icon])} {item.name} */}
              </a>
            );
          })}
        </div>

        {/* Array of objects , Social Media  */}
      </div>

      <div className="bg-light p-2 radius1">
        <h3 className="h3 bgc1 p-2 radius1 text-white">Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.1336986553433!2d34.7982721!3d31.9301273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b695c8cab0ff%3A0xc0ac3d775d3c8e20!2z16LXldek16gg16fXoNeZ15XXqteo!5e0!3m2!1siw!2sil!4v1690979370918!5m2!1siw!2sil"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Location */}
      </div>
    </div>
  );
}
