import React from 'react'; 
import Movie from './movie'
import ReviewForm from './review-form'


export default class Moviepost extends React.Component {
    constructor(props) {
        super(props); 
        this.state  = {movies:[{
            name:"The Shining", 
            release:"5/13/1980",
            overview: "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.",
            reviews: [{
                rating: '5',
                review: 'this is a amazing, one of my favorite movies and books!',
                movie:'The Shining', }, 
                {
                rating: '5',
                review: 'great movie',
                movie:'The Shining', }]
        }, {
            name:"Tropic Thunder", 
            release:"8/13/2008",
            overview:"While shooting a war film, the director attempts to liven up proceedings by dropping the principle actors into the middle of a real jungle, claiming he is going to capture their performance with hidden cameras. The hapless group including drug-addled comedy star Jeff Portnoy and po-faced method man Kirk Lazarus are completely unaware when a series of unfortunate events leads them into the middle of a real war zone.",
            reviews: [{
                rating: '5',
                review: 'amazing movie from when i was a kid, soooo funny.',
                movie:'Tropic Thunder', }],
        }]
        }
    this.addNewReview = this.addNewReview.bind(this)
    }

    //function that add new review
    addNewReview(review) {
        //this is a fake state that get the current state
        let fakeState = this.state.movies
        //loops through the state and find the making object with the same name 
        for(let i of fakeState) {
            if(i.name === review.movie) {
                //pushes the review into the mataching object reviews
                i.reviews.push(review)
                //set the state
                this.setState({movies: [...fakeState]}) 
                }
            }
        }

        render() {
            //maps through the movies and makes the cards
            const moviecard  = this.state.movies.map(movie => <Movie {...movie} key={movie.name}/>);
            return ( 
                <div>
                    {moviecard} <br></br>
                    <ReviewForm onSubmit={this.addNewReview} />
                </div>
            )
        }
}