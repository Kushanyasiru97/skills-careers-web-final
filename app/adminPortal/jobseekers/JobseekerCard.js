import { Phone } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BsFillEyeFill } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";

function JobseekerCard(props) {
  const {
    _id,
    firstName,
    lastName,
    email,
    contactNumber,
    position,
    personalProfile,
    dob,
    nationality,
    maritalStatus,
    languages,
    religion,
    address,
    ethnicity,
    experience,
    education,
    licensesCertifications,
    softSkills,
    professionalExpertise,
    profileImage,
  } = props.jobseeker;

  const handleViewJobSeeker = () => {
    props.onViewJobSeeker?.();
  };

  return (
      

      <div className="overflow-x-auto bg-white rounded-lg">
        <table className="w-full table-fixed">
          
          <tbody>
            <tr className="text-gray-700 hover:bg-gray-50 border-b text-sm">
              <td className=" w-[5%] py-3 pl-3">
                <input type="checkbox" />
              </td>
              <td className=" py-3 flex items-left">
                <div className="w-10 h-10 text-white flex justify-center items-center rounded-full m-1">
                  <Image src={profileImage} width={40} height={40} alt="logo" className="rounded-full" />
                </div>
              </td>
              <td className="py-3 text-black font-semibold  w-[20%] justify-start pl-0">
                {firstName} {lastName}
              </td>
              <td className="py-3 text-black font-semibold  w-[20%] justify-start">
                {email}
              </td>
              <td className=" py-3 text-black font-semibold  w-[20%] justify-start">
                {contactNumber}
              </td>
              <td className=" py-3 flex gap-2 ml-auto justify-end w-[30%] px-3">
  <Link href="./candidates/editProfile">
    <button className="flex items-center bg-[#001571] text-white py-2 px-4 rounded-lg shadow hover:bg-blue-800 whitespace-nowrap">
      <span className="mr-2">
        <FaPenToSquare size={15} />
      </span>
      Edit Account
    </button>
  </Link>
  <button className="flex items-center bg-[#EC221F] text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 whitespace-nowrap">
    <span className="mr-2">
      <IoMdEyeOff size={20} />
    </span>
    Restrict
  </button>
</td>

            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default JobseekerCard;
