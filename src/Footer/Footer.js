import React from 'react'

function Footer() {
    return (
        <div style={{ backgroundColor: 'white', paddingTop: '80px', paddingLeft: '60px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '24px', textAlign: 'left', fontWeight: '600', padding: '0px', color: '#0D2451' }}>GPA Calculator</h3>
            <div style={{display:'flex',alignItems:'stretch',justifyContent:'space-between'}}>
                <p
                    style={{
                        maxWidth: '500px', textAlign: 'left',
                        fontSize: '16px', textAlign: 'left', fontWeight: '400', padding: '0px', color: '#0D2451'
                    }}> GPA calculator is a refreshingly simple, easy to use web interface for calculating GPAs and class grades. Why? Because our mission at Wasai is to build a better internet, one digital product at a time. Like the site? Send us a note.
                </p>
                <div style={{display:'flex',flexDirection:'column'}}>
                <p>
                    Icons
                </p>
                <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Trash icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/calculator" title="calculator icons">Calculator icons created by Freepik - Flaticon</a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Footer