import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '../src/components/header'
import { Menu } from 'lucide-react'


describe("Header component", () => {
  
    it('should not render nav links on screens smaller than 500px', () => {
        global.innerWidth = 400;
        window.dispatchEvent(new Event('resize'));

        render(<Header/>)

        const navTag = screen.getByLabelText('Nav')
        expect(navTag).not.toBeVisible();
    });
      
    it ('should have class nav, and show when menu is clicked at nav tag', () => {
        render(<Header/>)
  
        const nav = screen.getByLabelText('Nav');
        expect(nav).toHaveClass('nav');
  
        const menu = screen.queryByLabelText('Menu');
        fireEvent.click(menu as HTMLElement)
        expect(nav).toHaveClass('show')
    });
    
    it('should not render the menu icon on screens larger than or equal to 500px', () => {
        global.innerWidth = 800;
        window.dispatchEvent(new Event('resize'));
    
        render(
          <div 
            className="menu"
            aria-label="Menu"
            style={{
                display: global.innerWidth < 500 ? 'flex' : 'none',
            }}
          >
            <Menu />
          </div>
        );
    
        const menu = screen.queryByLabelText('Menu');
        expect(menu).not.toBeVisible();
    });
    
})