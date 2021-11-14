import classes from './category_card.module.css'

const CategoryCard = (props)=>{
    const {title} = props;
    const categoryImages = {
        'electronics':'http://www.polytechnichub.com/wp-content/uploads/2017/04/Electronic.jpg',
        'jewelery':'https://m.media-amazon.com/images/I/81aUa3LrDzL._UY500_.jpg',
        'men\'s clothing': 'https://cdn.luxe.digital/media/2019/12/16162209/best-men-online-shopping-jcrew-luxe-digital.jpg',
        'women\'s clothing' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GqGwKh9LRdXiQDVcmgAt1nqIUWEEig4D8g&usqp=CAU'
    }

    return (
        <div className={classes.categoryCard}>
            <div className={classes.categoryImageContainer}>
                <img className={classes.categoryImage} src={categoryImages[title]} alt={`${title} items`} />
            </div>
            <div className={classes.categoryName}>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default CategoryCard