import react from "react";

class ProductList extends React.Component {
    render {
        return (
            <div className='ui unstackable items'>
                ProductList Component
            </div>
        );
    }
}


ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);
