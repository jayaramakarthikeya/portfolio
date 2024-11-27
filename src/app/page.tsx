import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import fs from "fs"
import path from "path"


const workItems: Item[] = [
  {
    title: "The Autoware Foundation",
    role: "robotics software engineer",
    period: "may 2024 - present",
    description: "Scaling end to end driving with Bird's eye view perception and improving localization with GNSS+IMU Fusion",
    href: "https://drive.google.com/file/d/17ixYnYU9M5p4Ik1FpNxfaQZZLl2gVb9n/view?usp=sharing",
    image: "/images/autoware/eve.gif",
  },
  {
    title: "Safe Autonomy lab",
    role: "Research Assistant",
    period: "jan 2024 - may 2024",
    description: "Worked on learning dynamics using Koopman framework. I was also involved in trajectory planning and full stack software for go-kart. Won First place in autonomous go-karting competition @ Purdue against universities like UC Berkeley, UCSD, UMich and more.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7203382940477575170/",
    image: "/images/penn/gokart.gif"
  },
  {
    title: "Banyan Intelligence",
    role: "software engineer",
    period: "jun 2022 - may 2023",
    description: "Built distributed Radio Access network simulator pipeline according to 3GPP standards which secured a deal with $2.8 billion company. Also developed a diagnostic tool for qualcomm SoC which got $1.2 million in funding.",
    href: "https://www.fsid-iisc.in/incubatees/banyan-intelligence/",
    image: "/images/bi/bi.png"
  },
  {
    title: "Centre for Robotics, Automation and Intelligent Systems",
    role: "perception engineer",
    period: "nov 2021 - feb 2022",
    description: "Developed semantic segmentation model to determine land cover on satellite images.",
    href: "https://github.com/jayaramakarthikeya/land-cover/",
    image: "/images/pesu/land_cover.png"
  }
]

const projectItems: Item[] = [
  {
    title: "stereo-vo",
    role: "Visual Odometry, Graph Optimization, Bundle Adjustment, G2O Solver, Optical Flow",
    description:
      "Improved keyframes and landmarks pose with optimized sliding window bundle adjustment backend and achieved with inference time less than 0.02 seconds with optical flow tracking using Lucas-Kanade method.",
    href: "https://github.com/jayaramakarthikeya/stereo_slam",
    image: "/images/projects/stereo-vo2.gif"
  },
  {
    title: "tinySD3",
    role: "Generative AI, Patch Variational AutoEncoder, Diffusion Transformer",
    description:
      "Developed Diffusion transformer model by sampling from pretrained patchVAE latent space and improving FID score from 423 to 174 on CelebA dataset.",
    href: "",
    image: "/images/projects/celeba_large.gif"
  },
  {
    title: "F1tenth Racing",
    role: "Object detection, Motion Planning, RRT, Particle Filter, Hokuyo 2D Lidar, Nvidia Jetson NX, ROS2 Foxy",
    description:
      "Designed full stack software for autonomous racing including perception, localization, planning and control.",
    href: "https://drive.google.com/file/d/1nya9irF75gcDkt4mYcmh5Bd1g2l98XH2/view?usp=sharing",
    image: "/images/projects/f1tenth.gif"
  },
  {
    title: "humanoid SLAM",
    role: "State Estimation, 2D SLAM, Particle filter",
    description:
      "Integrated IMU and 2D LIDAR scan from THOR-OP humanoid robot to build occupancy grip map of indoor environment by performing particle filter based localization.",
    href: "https://github.com/jayaramakarthikeya/humanoid_SLAM",
    image: "/images/projects/slam.gif"
  },
  {
    title: "seg-distributed",
    role: "Distributed Machine Learning, CUDA, AWS Cloud, Semantic Segmentation",
    description:
      "Enhanced training process with 75 percent speedup using Distributed Data Parallel technique with 4 A30 Nvidia GPUs compared to Single GPU mixed precision training.",
    href: "https://github.com/jayaramakarthikeya/segmentation_distributed",
    image: "/images/projects/seg_dst.png"
  },
  {
    title: "YOLO",
    role: "Object detection, Pytorch Lightning, Image Processing",
    description:
      "Implemented YOLOv1 pipeline from scratch in Pytorch to predict bounding boxes and achieved MAP of 0.41.",
    href: "https://github.com/jayaramakarthikeya/yolo",
    image: "/images/projects/yolo2.gif"
  },
  {
    title: "paint-anything",
    role: "Generative AI, DNN Inference, Generative Adversarial Networks, Neural Style Transfer",
    description:
      "Scripted Full Image to Image Translation Pipeline using CycleGAN to convert natural images to monet style paintings.",
    href: "https://github.com/jayaramakarthikeya/paint_anything",
    image: "/images/projects/paint.png"
  },
  {
    title: "quad-UKF",
    role: "IMU Calibration, Unscented Kalman Filter(UKF), Sensor Fusion",
    description:
      "Implemented a Quaternion based Unscented Kalman filter to track 3D orientation from IMU data and compared it against ground truth data obtained from motion capture system.",
    href: "https://github.com/jayaramakarthikeya/quadEKF",
    image: "/images/projects/quad_ukf.gif"
  },
  {
    title: "SOLO",
    role: "Instance Segmentation, Feature Pyramid Network",
    description:
      "Optimized SOLO pipeline using Feature Pyramid Network COCO dataset.",
    href: "https://github.com/jayaramakarthikeya/solo",
    image: "/images/projects/solo.gif"
  },
  {
    title: "plant-terrain-robo",
    role: "Data driven control, Elevation Mapping, Blender, Gazebo, ROS1 Noetic, Digital Twin",
    description:
      "Acomplished the design of digital twin of coffee plantation using Blender and Gazebo and implemented elevation mapping for optimal input to planner.",
    href: "https://github.com/jayaramakarthikeya/Jackal_MPC",
    image: "/images/projects/terrain.png"
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <LinksSection />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
      />
      
    </>
  )
}
