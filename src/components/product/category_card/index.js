import classes from './category_card.module.css'

const CategoryCard = (props)=>{
    const {title} = props;

    return (
        <div className={classes.categoryCard}>
            <h4>{title}</h4>
        </div>
    )
}

export default CategoryCard