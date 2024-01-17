import { Modal, Row, Image } from 'antd';

const EditModal = ({ visible, handleCancel, selectedData }) => {
   
    return (
        <Modal
            title="Edit Data"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
        >
            {selectedData && (
                // Display the data inside the modal
                <div>
                    <p>Request Number: {selectedData.name}</p>
                    <p>File: {selectedData.file}</p>
                    {/* Add other fields as needed */}
                </div>
            )}
        </Modal>
    );
};

export default EditModal;
