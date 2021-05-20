import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import { Input, Label } from 'reactstrap';
import img9 from '../../../assets/img/160x160/img9.jpg';

const Info = () => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenEdit = () => {
        setOpenEdit(!openEdit);
    };
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="card mb-3 mb-lg-5">
            <div className="card-body">
                <div className="d-flex align-items-center mb-5">
                    <div className="avatar avatar-lg avatar-circle">
                        <img className="avatar-img" src={img9} alt="avatar" />
                    </div>

                    <div className="mx-3">
                        <div className="d-flex mb-1">
                            <h3 className="mb-0 mr-3">Anne Richard</h3>

                            <div className="hs-unfold">
                                <button
                                    className="js-hs-unfold-invoker btn btn-icon btn-xs btn-white rounded-circle"
                                    type="button"
                                    onClick={handleOpenEdit}
                                >
                                    <AiIcons.AiOutlineEdit />
                                </button>

                                <div
                                    id="editDropdown"
                                    className={
                                        openEdit
                                            ? 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-card mt-1 hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp'
                                            : 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-card mt-1'
                                    }
                                    style={{ minWidth: '20rem' }}
                                >
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="form-row">
                                                <div className="col-sm-6">
                                                    <Label
                                                        htmlFor="firstNameLabel"
                                                        className="input-label"
                                                    >
                                                        First name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="firstName"
                                                        id="firstNameLabel"
                                                        placeholder="Clarice"
                                                        value="Anna"
                                                        onChange={() => console.log('lname')}
                                                    />
                                                </div>

                                                <div className="col-sm-6">
                                                    <Label
                                                        htmlFor="lastNameLabel"
                                                        className="input-label"
                                                    >
                                                        Last name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        name="lastName"
                                                        id="lastNameLabel"
                                                        placeholder="Boone"
                                                        value="Richard"
                                                        onChange={() => console.log('lname')}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end mt-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-white mr-2"
                                                    onClick={handleOpenEdit}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-eshop"
                                                    onClick={handleOpenEdit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="font-size-sm">Seller from 3 months</span>
                    </div>

                    <div className="d-none d-sm-inline-block ml-auto text-right">
                        <div className="hs-unfold">
                            <button
                                className="js-hs-unfold-invoker btn btn-sm btn-white"
                                type="button"
                                onClick={handleOpenMenu}
                            >
                                Actions <RiIcons.RiArrowDownSLine />
                            </button>

                            <div
                                className={
                                    openMenu
                                        ? 'hs-unfold-content dropdown-unfold dropdown-menu mt-1 hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp'
                                        : 'hs-unfold-content dropdown-unfold dropdown-menu mt-1'
                                }
                            >
                                <a className="dropdown-item" href="#Email">
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        <AiIcons.AiOutlineMail />
                                    </IconContext.Provider>{' '}
                                    Email
                                </a>
                                <a className="dropdown-item" href="#Call">
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        <AiIcons.AiOutlinePhone />
                                    </IconContext.Provider>{' '}
                                    Call
                                </a>
                                <a className="dropdown-item" href="#Merge">
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        <AiIcons.AiOutlineSync />
                                    </IconContext.Provider>{' '}
                                    Merge
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item text-danger" href="#Delete">
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        <AiIcons.AiOutlineDelete />
                                    </IconContext.Provider>{' '}
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
