import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import videoData from '../../../mock/searchVideo.MockData.json'
import relatedData from '../../../mock/relatedVideos.mockData.json'
import VideoComponent from '../VideoComponent'
import { GlobalProvider } from '../../../providers/Global/Global.provider'

describe('Testing Video component', () => {
  it('render information of a video', () => {
    render(
      <VideoComponent video={videoData} relatedVideos={relatedData.items} />
    )

    screen.debug
  })

  it('The page has information of the video', () => {
    render(
      <VideoComponent video={videoData} relatedVideos={relatedData.items} />
    )
    const title = screen.getAllByText(
      'Video Tour | Welcome to Wizeline Guadalajara'
    )[0]
    expect(title).toBeInTheDocument
  })

  // Add to favorites button

  it('The page shloud display a add to favorites button', () => {
    render(
      <GlobalProvider>
        <VideoComponent video={videoData} relatedVideos={relatedData.items} />
      </GlobalProvider>
    )
    const buttonText = screen.getByText('Add Favorites')
    expect(buttonText).toBeInTheDocument
  })

  it('The button should add the item to the local storage', () => {
    render(
      <GlobalProvider>
        <VideoComponent video={videoData} relatedVideos={relatedData.items} />
      </GlobalProvider>
    )

    const favoritesButton = screen.getByRole('button')
    fireEvent.click(favoritesButton)
    const favoritesList = JSON.parse(localStorage.getItem('favorites'))

    expect(favoritesList[0]).toEqual(videoData)
  })

  it('Displays Remove from Favorites if the item is on the localstorage', async () => {
    const favorites = []
    favorites.push(videoData)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    render(
      <GlobalProvider>
        <VideoComponent video={videoData} relatedVideos={relatedData.items} />
      </GlobalProvider>
    )

    await screen.findByText('Remove from Favorites')
  })

  it('Removes the video from the favorites list', () => {
    const favorites = []
    favorites.push(videoData)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    render(
      <GlobalProvider>
        <VideoComponent video={videoData} relatedVideos={relatedData.items} />
      </GlobalProvider>
    )

    const favoritesButton = screen.getByRole('button')
    fireEvent.click(favoritesButton)

    const favoritesList = JSON.parse(localStorage.getItem('favorites'))
    expect(favoritesList).toEqual([])
  })
})
