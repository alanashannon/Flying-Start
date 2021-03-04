import React from 'react'; 
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import FeaturedProject from './featured_project';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; 

class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNum: "1", 
        }

        this.handlePage = this.handlePage.bind(this);
    }

    componentDidMount() {
        this.props.fetchProjects(); 
        this.props.fetchUsers();  
        this.props.fetchCategories();

        let firstPage = document.getElementById("1")
        firstPage.style.fontWeight = "bold" 
    }

    handlePage(e) {
        e.preventDefault(); 
        const clicked = e.target 

        this.setState({
            pageNum: clicked.id, 
        })

        let page1 = document.getElementById("1")
        let page2 = document.getElementById("2")
        let page3 = document.getElementById("3")
        let arrowLeft = document.getElementById("arrow-left")
        let arrowRight = document.getElementById("arrow-right")

        if (clicked.id === "1") {
            page1.style.fontWeight = "bold"
            page2.style.fontWeight = "normal"
            page3.style.fontWeight = "normal"
            arrowLeft.style.color = "gray"
            arrowRight.style.color = "green"
        } else if (clicked.id === "2") {
            page2.style.fontWeight = "bold"
            page1.style.fontWeight = "normal"
            page3.style.fontWeight = "normal"
            arrowLeft.style.color = "green"
            arrowRight.style.color = "green"
        } else if (clicked.id === "3") {
            page3.style.fontWeight = "bold"
            page1.style.fontWeight = "normal"
            page2.style.fontWeight = "normal"
            arrowLeft.style.color = "green"
            arrowRight.style.color = "gray"
        }
    }

    render () {
        const categoriesArr = Object.values(this.props.categories)

        let projectSlice = this.props.projects.slice(((this.state.pageNum - 1) * 4), (this.state.pageNum * 4))
        let result = projectSlice.map((project, i) => {
            return <ProjectIndexItem project={project} users={this.props.users} key={i} />
        })

        

        return (
            <div>
                <div className="category-bar">
                    <ul>
                        {categoriesArr.map((category, i) => {
                            return (
                                <li key={i} >
                                    <Link className="list-everything" to={`/category/${category.id}`}>{category.category_name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="index-container">
                    <section className="featured-project">
                        <div className="featured-header">Featured Project</div>
                        <FeaturedProject project={this.props.project} users={this.props.users} />
                    </section>

                    <section className="recommended-projects">
                        <div className="recommended-header">Recommended For You</div>
                        <ul>
                            {result}
                            <br />
                        </ul>
                        <div className="pageNum-list">
                            <div className="pageArrow"><IoIosArrowBack size={16} color={"gray"} id="arrow-left"/></div>
                            <div onClick={this.handlePage} className="pageNum" id="1" >1</div>
                            <div onClick={this.handlePage} className="pageNum" id="2" >2</div>
                            <div onClick={this.handlePage} className="pageNum" id="3" >3</div>
                            <div className="pageArrow"><IoIosArrowForward size={16} color={"green"} id="arrow-right"/></div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default ProjectIndex; 