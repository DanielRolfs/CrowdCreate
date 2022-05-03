

function MainHeader(props) {
    return (
        <div className="header h-16 flex items-center relative">
            <h1 className="flex-auto text-3xl">{props.headline}</h1>
            <div className='content flex items-center'>{props.children}</div>

           
        </div>
    );
}

export default MainHeader;
