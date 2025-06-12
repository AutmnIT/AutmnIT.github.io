## Working on Navbar
Prob: in Nav I used <a href> but it is not good as it reload than scroll,.
Sol: using react-scroll lib

Problem: When we go to the blog "/blog", then ckick other nav element, we cna't come back(i.e react-scroll work on same page).
SOl: We will write the whole thing in js, the logic is if page is other than "/" it should go to the "/" first than scroll to the "/#" element, we have to use "useLocation" hook.

Problem: Still it is showwing messy behaivour
Sol: react-router-hash-link

## Working on About
