import React from 'react'
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';
import GaugeChart from 'react-gauge-chart'
import './ModalScreen.css'
import deleteIMG2 from '../images/delete2.png'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#D9F7FA'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function ModalScreen({ modalIsOpen, closeModal, afterOpenModal, gpa }) {

  let gpa_as_percent = gpa * 25 / 100;
  let subtitle;
  return (
    <div style={{ backgroundColor: '#D9F7FA' }}>
      <Modal

        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ padding: '20px', position: 'relative' }}>
          <button
            onClick={closeModal}
            style={{ position: 'absolute', right: '0px', top: '0px', backgroundColor: 'transparent', borderWidth: '0px' }}>
            <img className='deleteButton' src={deleteIMG2} style={{ width: '20px' }} />
          </button>
          <h2 style={{ fontWeight: '600', color: '#4E4E4E', fontSize: '24px' }} ref={(_subtitle) => (subtitle = _subtitle)}>GPA: {gpa}</h2>

          <div style={{ marginTop: '40px' }}>
            <GaugeChart

              animate
              hideText
              animDelay={300}
              percent={gpa_as_percent}
              needleColor='#2C8087'
              arcsLength={[0.25, 0.5, 0.25]}
              textColor={'rgb(13, 36, 81'}
              colors={['#F51515', '#F5DD15', '#2AD915']}
              id="gauge-chart1" />
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default ModalScreen