import ponggok from './ponggok.jpg';

const card = () => {
    return (
        <div class="card">
            <div class="card-top">
                <h1>Card</h1>
            </div>
            <div class="card-body">
                    <img src={ponggok}></img>
            </div>
            <div>
                <p> Keterangan dalam Crad komponen</p>
            </div>
        </div>
    );
};

export default card;