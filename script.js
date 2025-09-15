document.addEventListener('DOMContentLoaded', () => {
    // Data for the exercise cards
    const exercises = [
        {
            name: 'Push-ups',
            description: 'A classic bodyweight exercise that targets the chest, shoulders, and triceps.',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f92b2347?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Squats',
            description: 'A fundamental lower-body exercise that strengthens the legs and glutes.',
            image: 'https://images.unsplash.com/photo-1599532320473-04988062828b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Plank',
            description: 'An excellent core-strengthening exercise that builds stability and endurance.',
            image: 'https://images.unsplash.com/photo-1543851505-59d9c28e2182?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Burpees',
            description: 'A full-body exercise that combines a squat, push-up, and jump for cardio and strength.',
            image: 'https://images.unsplash.com/photo-1587391969429-455b5505d933?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    const exerciseGrid = document.querySelector('.exercise-grid');
    const exploreBtn = document.getElementById('explore-btn');

    // Function to generate and append exercise cards
    function generateExerciseCards() {
        exercises.forEach(exercise => {
            const card = document.createElement('div');
            card.className = 'exercise-card';

            card.innerHTML = `
                <img src="${exercise.image}" alt="${exercise.name}">
                <div class="card-content">
                    <h3>${exercise.name}</h3>
                    <p>${exercise.description}</p>
                </div>
            `;
            exerciseGrid.appendChild(card);
        });
    }

    // Smooth scroll for the "Explore Exercises" button
    exploreBtn.addEventListener('click', () => {
        document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' });
    });

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Select all sections to animate
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
    
    // Initial call to generate the cards
    generateExerciseCards();
});