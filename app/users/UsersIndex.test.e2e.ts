describe('Movies Search Page', () => {

  beforeEach(() => {
    // First intercept requests to the movie search API
    // and the movie info API, and return mock data.
    // This is done to avoid hitting the actual API and
    // to ensure the tests are deterministic and fast.
    cy.intercept(
      {
        method: 'GET',
        url: '/api/users',
      },
      mockUsersIdResponse
    ).as('getUserIds')

    cy.intercept(
      {
        method: 'GET',
        url: '/api/users/*',
      },
      mockUsersInfoResponse
    ).as('getUsersInfo')
  });

  it('should load the users list with rendered avatar and name', () => {
    cy.visit('/users');
    cy.get('.usersList').should('exist');
    cy.get('[data-testid=PersonIcon]').should('exist');
    cy.get('.usersList').contains('Root User');
  });

  it('should render the user profile when list item is clicked', () => {
    cy.visit('/users');
    cy.get('a[href="/users/0"]').click();
    cy.get('.userProfile_stats').should('exist');
    cy.get('.userProfile_stats').contains('reading');
    cy.get('.userProfile_stats').contains('writing');
  });
  
  // TODO - write more tests. These are just examples.
});

const mockUsersIdResponse = {
  user_ids: [
    0
  ]
}

const mockUsersInfoResponse = {
  id: 0,
  first_name: 'Root',
  last_name: 'User',
  stats: {
    current_streak_in_days: 27,
    total_sessions_played: 120,
    skills: {
      writing: {},
      reading: {},
      math: {},
      speaking: {}
    }
  }
}
