const Footer = () => {
  return (
    <section>
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto flex justify-between items-center">
                <div>
                    <h4 class="font-bold text-lg">Company Name</h4>
                    <p>&copy; 2023 Company Name. All rights reserved.</p>
                </div>
                <div class="flex space-x-4">
                    <a href="#" class="hover:underline">Home</a>
                    <a href="#" class="hover:underline">About</a>
                    <a href="#" class="hover:underline">Services</a>
                    <a href="#" class="hover:underline">Contact</a>
                </div>
            </div>
        </footer>

    </section>
  )
}

export default Footer