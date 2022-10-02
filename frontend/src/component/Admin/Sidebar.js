import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import { MdDashboard, MdImportExport, MdRateReview, MdList } from 'react-icons/md';
import { BsArrowsAngleExpand, BsPeopleFill } from 'react-icons/bs';
import { BiAddToQueue } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/admin/dashboard">
                <p>
                    <MdDashboard /> Dashboard
                </p>
            </Link>
            <Link to="#" className="treelink">
                <TreeView className="tree"
                    defaultCollapseIcon={<BsArrowsAngleExpand />}
                    defaultExpandIcon={<MdImportExport />}
                >
                    <TreeItem nodeId="1" label="Products">
                        <Link to="/admin/products">
                            <TreeItem nodeId="2" label="All" icon={<BiAddToQueue />} />
                        </Link>

                        <Link to="/admin/product">
                            <TreeItem nodeId="3" label="Create" icon={<AiOutlinePlus />} />
                        </Link>
                    </TreeItem>
                </TreeView>
            </Link>
            <Link to="/admin/orders">
                <p>
                    <MdList />
                    Orders
                </p>
            </Link>
            <Link to="/admin/users">
                <p>
                    <BsPeopleFill /> Users
                </p>
            </Link>
            <Link to="/admin/reviews">
                <p>
                    <MdRateReview />
                    Reviews
                </p>
            </Link>
        </div>
    );
};

export default Sidebar;
