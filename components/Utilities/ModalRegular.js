import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

export default function ModalRegular({showModal,setShowModal,title,children,size,footer,saveFunction,close,save}) {
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Modal size={`${size ? size : 'regular'}`} active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                   {title}
                </ModalHeader>
                <ModalBody>
                   {children}
                </ModalBody>
                    <ModalFooter>
                {close && 
                        <Button 
                            color="red"
                            buttonType="link"
                            onClick={(e) => setShowModal(false)}
                            ripple="dark"
                        >
                            Close
                        </Button>

                }
                     {save && 
                      <Button
                            color="green"
                            onClick={(e) => setShowModal(false)}
                            ripple="light"
                        >
                            Save Changes
                        </Button>
                     }  
                    </ModalFooter>
            </Modal>
        </>
    );
}